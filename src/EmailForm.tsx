import React, { useState } from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';

interface EmailDto {
  From: string;
  To: string;
  Subject: string;
  Body: string;
}

export const EmailForm = () => {
  const [email, setEmail] = useState<EmailDto>({
    From: '',
    To: '',
    Subject: '',
    Body: '',
  });

  const [message, setMessage] = useState<string>('');
  const clearForm = () => setEmail({ From: '', To: '', Subject: '', Body: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail({ ...email, [e.target.name]: e.target.value });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axios.post('https://localhost:7219/email', email);
      clearForm();
      setMessage('Email sent successfully!');
    } catch (error) {
      setMessage('An error occurred while sending the email.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' component='h2'>
        Send Email
      </Typography>

      <TextField
        fullWidth
        margin='normal'
        label='From'
        variant='outlined'
        name='From'
        value={email.From}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        margin='normal'
        label='To'
        variant='outlined'
        name='To'
        value={email.To}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        margin='normal'
        label='Subject'
        variant='outlined'
        name='Subject'
        value={email.Subject}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        margin='normal'
        label='Body'
        variant='outlined'
        multiline
        name='Body'
        rows={10}
        value={email.Body}
        onChange={handleChange}
      />

      <Button
        variant='contained'
        color='primary'
        onClick={handleSubmit}
        disabled={isLoading}>
        Send
      </Button>
      {isLoading && <CircularProgress />}
      <Typography
        variant='body1'
        style={{
          marginTop: '16px',
          color: message.includes('successfully') ? 'green' : 'red',
        }}>
        {message}
      </Typography>
    </Container>
  );
};
