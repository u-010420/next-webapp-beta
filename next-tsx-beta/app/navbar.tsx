/* @Navigation Bar • Dynamic Component */
'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';

export default function NavBar() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, [])

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md bg-black">
        <div className="container-fluid">

          <Link
            className="navbar-brand fw-bold d-block-inline py-2"
            href="/"
          >
            <span>&#x1F680;</span>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={90}
              height={16}
            />
            <span className="badge text-bg-light">BETA</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/">
                  HOME
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}
