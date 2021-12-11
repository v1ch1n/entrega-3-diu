import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';


import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Register = () => {
    const [age, setAge] = React.useState('');
      
        const handleChangeAge = (event) => {
          setAge(event.target.value);
        }
        const [value, setValue] = '';

        const handleChangeDate = (newValue) => {
          setValue(newValue);
        };
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      encargado: '',
      policy: false
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Debe ser un correo electrónico válido')
        .max(255)
        .required(
          'Se requiere un correo electrónico'),
      firstName: Yup
        .string()
        .max(255)
        .required(
          'Se requiere el nombre del proyecto'),
      lastName: Yup
        .string()
        .max(255)
        .required(
          'Last name is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required'),
        encargado: Yup
        .string()
        .max(255)
        .required(
            'Debe de')
    }),
    onSubmit: () => {
      history.push('/')
    }
  });

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const [personName, setPersonName] = React.useState([]);

const handleChangeMembers = (event) => {
  const {
    target: { value },
  } = event;
  setPersonName(
    // On autofill we get a the stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};
  return (
        
    <>
      <Head>
        <title>
          Register
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Crear un nuevo proyecto
              </Typography>
              
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Agregue un nuevo proyecto a su sistema
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="Nombre del Proyecto"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
              sx={{ mt: 3 }}
            />
            <FormControl
            fullWidth
            sx={{ mt: 2 }}
            >
        <InputLabel id="demo-simple-select-helper-label">Encargado</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChangeAge}
        >
          <MenuItem value={10}>Vicente</MenuItem>
          <MenuItem value={20}>Javier</MenuItem>
          <MenuItem value={30}>Yi</MenuItem>
        </Select>
        {age == '' && (
    <FormHelperText error id="accountId-error">
        {Boolean(formik.touched.firstName && formik.errors.firstName)}
        Asegúrese de asignar un encargado
    </FormHelperText>
  )}
  
      </FormControl>
      <FormControl
      sx={{ mt: 2 }}
        fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">Miembros</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChangeMembers}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        {personName == '' && (
    <FormHelperText error id="accountId-error">
        {Boolean(formik.touched.firstName && formik.errors.firstName)}
        Asegúrese de asignar al menos un miembro
    </FormHelperText>
  )}
      </FormControl>
      
            <TextField
            sx={{ mt: 3, mb:3}}
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Correo electrónico"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker 
            sx={{ mt: 20 }}
          label="Fecha de inicio"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChangeDate}
          renderInput={(params) => <TextField {...params} />}
        />
        </Stack>
        </LocalizationProvider>
            
            
            <Box sx={{ py: 2 }}>
              <NextLink
              href="/"
              passHref
              >
                <Button
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  variant="contained"
                >
                  Crear 
                </Button>
              </NextLink>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;