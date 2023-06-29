import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'background.paper' }}>
      <Container maxWidth='sm'>
        <Typography align='center'>
          © {new Date().getFullYear()} Sudi David
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
