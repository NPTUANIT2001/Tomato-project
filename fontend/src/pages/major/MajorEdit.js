import { useEffect, useState } from "react";
import "./MajorEdit.css";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../component/input";
import majorService from "../../service/majorservice";

import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const MajorEdit = () => {
  const [major, setMajor] = useState([]);
  const [message, setMessage] = useState("");

  const validationSchema = Yup.object({
    id: Yup.number().required("Required"),
    name: Yup.string().required("Required").min(5, ">= 5 characters"),
  });

  const formik = useFormik({
    initialValues: {
      id: 0,
      name: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleSave(values);
    },
  });
  const param = useParams();
  useEffect(() => {
    const fetchMajor = async (id) => {
      try {
        const res = await majorService.get(id);
        setMajor(res.data);
        formik.setValues(res.data);
      } catch (error) {
        console.error("Error fetching major:", error);
      }
    };

    if (param.id > 0) {
      fetchMajor(param.id);
    }
  }, [param.id]);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/major");
  };

  const handleSave = (values) => {
    const saveOrUpdate =
      values.id === 0
        ? majorService.add(values)
        : majorService.update(values, values.id);

    saveOrUpdate.then((res) => {
      if (res.errorCode === 0) {
        navigate("/major");
        toast.success(values.id === 0 ? "Add successful" : "Update successful");
      } else {
        setMessage(res.message);
        toast.error(values.id === 0 ? "Add failed" : "Update failed");
      }
    });
  };
  return (
    <>
      <div className="container modal-container rounded">
        <div className="row justify-content-md-center gap-3 khung">
          <div className="modal-header">
            <h3 className="card-title">
              Major{" "}
              <small className="text-muted">
                {param.id > 0 ? "edit" : "new"}
              </small>
            </h3>
          </div>
          <div className="modal-body">
            <p className="text-center text-danger">{message}</p>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-modal">
                <div className="mb-3 row">
                  <div className="col-sm-10">
                    <Input
                      type="text"
                      label="Major name"
                      id="txtMajorName"
                      frmField={formik.getFieldProps("name")}
                      errMessage={formik.touched.name && formik.errors.name}
                    />
                  </div>
                </div>
              </div>
              <div className="col-auto submit">
                <button
                  type="submit"
                  className="btn btn-primary mb-3 me-1"
                  disabled={!formik.dirty || !formik.isValid}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mb-3"
                  onClick={handleBack}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MajorEdit;
