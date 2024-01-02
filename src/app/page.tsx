
import React from 'react';
import {About, Landing, Github} from '../components';
import "../styles/globals.css";
import Projects from '@/components/Projects/Projects';

export default function Home() {
  return <>
  <div className=''>

  <Landing/>
  <About/>
  <Github/>
  <Projects/>
  </div>
  
  </>;
}
