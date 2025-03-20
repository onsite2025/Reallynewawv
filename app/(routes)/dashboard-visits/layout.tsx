'use client';

import React from 'react';
import AuthGuard from '../../components/AuthGuard';

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
