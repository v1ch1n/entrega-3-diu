import Head from 'next/head';
import { Box, Container, Grid, Pagination, IconButton } from '@mui/material';
import { products } from '../../__mocks__/products_chon';
import { ProductListToolbar } from '../../components/product/product-list-toolbar';
import { ProductCard } from '../../components/product/product-card';
import { DashboardLayout } from '../../components/dashboard-layout';
import { ArrowBack } from '@mui/icons-material';

const Products = () => (
  <>
    <Head>
      <title>
        Estadísticas
      </title> 
    </Head>
    <IconButton color='primary' href='/stats' sx={{
        position: 'absolute',
        margin: '10px 0 0 13px',
        }}>
        <ArrowBack />
    </IconButton>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          
        </Box>
      </Container>
    </Box>
  </>
);

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Products;