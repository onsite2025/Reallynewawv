// For all layout files (app/(routes)/*/layout.tsx)
'use client';

import React from 'react';
// Try direct import from the root of the app
import AuthGuard from '../../../components/AuthGuard';

export default function DashboardVisitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      {children}
    </AuthGuard>
  );
}
