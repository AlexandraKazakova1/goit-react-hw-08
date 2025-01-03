import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactsList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Container, Typography } from "@mui/material";
import { selectIsLoading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts())
      .then((response) => {
        console.log("Contacts loaded:", response.payload);
      })
      .catch((error) => {
        console.error("Error loading contacts:", error);
        setError("Failed to load contacts. Please try again later.");
      });
  }, [dispatch]);

  if (error) {
    return (
      <Container maxWidth="sm" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container maxWidth="sm" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h5">Loading Contacts...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" color="aliceblue" gutterBottom>
        Your Contacts
      </Typography>
      <ContactForm />
      <SearchBox />
      <ContactsList />
    </Container>
  );
};

export default ContactsPage;
