import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Main from "../Main"
import TextInput from "../TextInput"

import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main>
        <div className='screens'>
          <section className='screen'>
            <div className='inputs'>
              <TextInput label='Name' required />
              <TextInput label='Email' type='email' disabled />
              <TextInput label='Name' required />
              <button>This is a button</button>
            </div>
          </section>
        </div>
      </Main>
      <Footer />
    </div>
  )
}

export default App
