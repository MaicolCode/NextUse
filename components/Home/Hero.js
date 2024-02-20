import Image from "next/image";
import Link from "next/link";
import React from "react";

import BADGE_KODEMIA from '@/public/assets/home/badge-kodemia.svg';
import IMG_PRUEBA from '@/public/assets/home/dog.jpg';

export default function Hero() {
  return (
    <section>
      <div className="row">
        <section className="col-lg-6">
          <h1 className="hero__title">Hey There, I am Maicol</h1>
          <Link href="#" className="d-none d-lg-block hero__email">
            maicolcodea@gmail.com
          </Link>
          <div className="hero__experiencies">
            <strong>3</strong>
            <p>Años de experiencia</p>
          </div>
        </section>
        <section className="col-lg-6 position-relative ">
            <p className="hero__subtitle">I design beautifully simple things, <br/> And I love what i do</p>
            <figure className="hero__badge p-0">
                <Image src={BADGE_KODEMIA} alt="Badge Kodemia"/>
            </figure>
            <Image src={IMG_PRUEBA} width={300} height={430} alt="Foto Prueba" className="hero__photo mx-auto"/>
            <p className="d-none d-md-block">FullStack JavaScript Developer</p>
        </section>
      </div>
    </section>
  );
}
