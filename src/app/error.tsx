'use client';

import { useEffect } from 'react';
import { Container, Paper, Typography, Button, Box } from '@mui/material';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <Box sx={{ minHeight: '100vh', py: 8, display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom color="error">
            Something went wrong!
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            {error.message || 'An unexpected error occurred'}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={reset}
            size="large"
          >
            Try again
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}