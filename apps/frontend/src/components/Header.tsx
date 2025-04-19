'use client';

import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Grozny App
          </Typography>
          <Button color="inherit">Главная</Button>
          <Button color="inherit">О нас</Button>
          <Button color="inherit">Контакты</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
} 