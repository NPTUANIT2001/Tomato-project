import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import majorService from "../../service/majorservice";
import { toast } from "react-toastify";

const Major = () => {
  const navigate = useNavigate();
  const [major, setMajor] = useState([]);

  const showEditPage = (e, id) => {
    if (e) e.preventDefault();
    navigate(`/major/${id}`);
  };
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    majorService.list().then((res) => {
      setMajor(res.data);
    });
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    majorService.delete(id).then((res) => {
      if (res.errorCode === 0) {
        loadData();
        toast.warn("Delete successful");
      } else {
        toast.error("Delete failed");
      }
    });
  };

  return (
    <>
      <div>
        <div className="container mt-4">
          <div className="card border-primary bt-5">
            <div className="card-header">
              <div className="row">
                <div className="col">
                  <h3 className="card-title">
                    Major <small className="text-muted">list</small>
                  </h3>
                </div>
                <div className="col-auto">
                  <button
                    type="button"
                    className="btn btn-primary"
                    // data-bs-toggle="modal"
                    // data-bs-target="#editModal"
                    onClick={() => showEditPage(null, 0)}
                  >
                    <i className="bi-plus-lg" /> Add
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered border-primary table-hover table-striped">
                  <thead>
                    <tr className="table-primary border-primary">
                      <th style={{ width: 50 }}>#</th>
                      <th>Major Name</th>
                      <th style={{ width: 80 }} />
                    </tr>
                  </thead>
                  <tbody>
                    {major.map((major, idx) => (
                      <tr key={major.id}>
                        <td>{idx}</td>
                        <td>{major.name}</td>
                        <td>
                          <a
                            onClick={(e) => showEditPage(e, major.id)}
                            className="me-1" 
                          >
                            <i className="bi-pencil-square text-primary" />
                          </a>
                          <a onClick={(e) => handleDelete(e, major.id)}>
                            <i className="bi-trash text-danger" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        {/* <div
          className="modal fade"
          id="editModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  New Major
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <label
                      htmlFor="txtMajor"
                      className="col-sm-3 col-form-label required"
                    >
                      Major name
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="txtMajor"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Major;
