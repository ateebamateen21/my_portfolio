
import React from 'react';
import {sections} from '../components/index';
import "../styles/globals.css";
import Projects from '@/components/Projects/Projects';

export default function Home() {
  return <>
  <div className=''>

  <sections.Landing/>
  <sections.About/>
  <sections.Github/>
  <sections.HighlightedWork/>
  </div>
  
  </>;
}
