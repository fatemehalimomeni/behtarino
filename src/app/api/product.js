import { Server } from ".";

const list = () => {
    return Server.get("products", { params: {} });
};

const detail = (id) => {
  return Server.get(`products/${id}`, { params: {} });
};

export default {
  list,
  detail,
};
