import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Users from '../components/Users'
import {useState} from 'react'

export default function Home() {
  const [count,setCount] = useState(3);
  return (
    <div className={styles.container}>
    <div style={{display:'none'}}>
      <Users count={count + 3} setCount={setCount} />
    </div>
    <Users count={count} setCount={setCount} />
    </div>
  )
}
