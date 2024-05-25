import api from "./api";

const list = () => {
  return api.get(api.url.majors);
};
const get = (id) => {
  return api.get(`${api.url.majors}/${id}`);
};
const add = (data) => {
  return api.post(api.url.majors, data);
};
const update = (data, id) => {
  return api.put(`${api.url.majors}/${id}`, data);
};
const remove = (id) => {
  return api.delete(`${api.url.majors}/${id}`);
};
const majorService = {
  list,
  get,
  add,
  update,
  delete: remove,
};
export default majorService;
