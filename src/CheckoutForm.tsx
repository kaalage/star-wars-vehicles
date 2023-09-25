import React from 'react';
import axios from 'axios';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Paper, Button, Box} from '@mui/material';
import { Link } from 'react-router-dom';


const CheckoutForm: React.FC = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    cpfCnpj: '',
    cep: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    phone: Yup.string().required('Telefone é obrigatório'),
    cpfCnpj: Yup.string().required('CPF/CNPJ é obrigatório'),
    cep: Yup.string().required('CEP é obrigatório'),
  });

  const handleSubmit = (values: any) => {
    // Perform form submission logic
    console.log(values);
  };

  return (
    <div className="form-background">
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper  elevation={3} sx={{ width: 600, height: 710, padding: '1rem' }}>
      <h2>Checkout</h2><br></br>
      <p>Informações pessoais</p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div>
            <TextField id="outlined-basic" label="Nome completo" variant="outlined" type="text" style={{ marginBottom: '10px', marginTop: '20px'}} fullWidth/>
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <TextField id="outlined-basic" label="E-mail" variant="outlined" type="email" style={{ marginBottom: '10px'}} fullWidth/>
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <TextField id="outlined-basic" label="Telefone" variant="outlined" type="number" style={{ marginBottom: '10px'}} fullWidth/>
            <ErrorMessage name="phone" component="div" />
          </div>
          <div>
            <TextField id="outlined-basic" label="CPF/CNPJ" variant="outlined" type="number" style={{ marginBottom: '10px'}} fullWidth/>
            <ErrorMessage name="cpfCnpj" component="div" />
          </div><br></br>

          <p>Informações de Endereço</p><br></br>
          <div>
            <TextField id="outlined-basic" label="CEP" variant="outlined" type="number" style={{ marginBottom: '10px'}} fullWidth/>
            <ErrorMessage name="cep" component="div" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '0.5rem', marginBottom:'10px' }}>
          <div>
            <TextField id="outlined-basic" label="Endereço" variant="outlined" type="text" fullWidth/>
            <ErrorMessage name="address" component="div" />
          </div>
          <div>
            <TextField id="outlined-basic" label="Número" variant="outlined" type="number" fullWidth/>
            <ErrorMessage name="number" component="div" />
          </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '0.5rem', marginBottom:'10px' }} >
          <div>
            <TextField id="outlined-basic" label="Complemento" variant="outlined" type="text" fullWidth/>
            <ErrorMessage name="additional" component="div" />
          </div>
          <div>
            <TextField id="outlined-basic" label="Cidade" variant="outlined" type="text" fullWidth/>
            <ErrorMessage name="city" component="div" />
          </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '0.5rem', marginBottom:'10px' }}>
          <div>
            <TextField id="outlined-basic" label="Bairro" variant="outlined" type="text" fullWidth/>
            <ErrorMessage name="neighborhood" component="div" />
          </div>
          <div>
          <TextField id="outlined-basic" label="UF" variant="outlined" type="text" fullWidth/>
            <ErrorMessage name="state" component="div" />
          </div>
          </div>
          
          <Box textAlign='center' sx={{ '& button': { m: 1 } }}>
            <div>
              <Link to="/checkout">
                <Button 
                  variant="contained" 
                    size="small" 
                    color="primary"
                    sx={{
                    backgroundColor: '#000000', '&:hover': {backgroundColor: '#666'},
              }}>Submit</Button>
              </Link>
            </div>
          </Box>
        </Form>
      </Formik>
      </Paper>
      </Box>
    </div>    
  );
};

export default CheckoutForm;
