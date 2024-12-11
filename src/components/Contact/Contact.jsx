import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.contact_container}>
      <div className={s.contact_container_text}>
        <p className={s.contact_name}>{name}</p>
        <p className={s.contact_number}>{number}</p>
      </div>
      <button className={s.contact_btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
