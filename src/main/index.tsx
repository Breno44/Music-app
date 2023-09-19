import React from 'react';
import ReactDOM from 'react-dom';
import Router from "@/main/routes/router"
import { App } from '@/app';

ReactDOM.render(
  <Router MakeLogin={App} />,
  document.getElementById('main')
);
