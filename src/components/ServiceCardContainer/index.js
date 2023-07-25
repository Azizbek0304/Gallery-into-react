import React from 'react';
import { ServiceCard } from './ServiceCard';

const ServiceCardsContainer = () => {
  const serviceData = [
    {
      imageUrl: './RAQAMLI DIZAYN/rayhona.jpg',
      title: 'Rayhona',
      subtitle: 'Anvarova',
      paragraph:
        'Milliy liboslar boyicha Dizayner, Sanat va Madinay Instituti talabasi.',
      link: './en.html',
    },
    {
      imageUrl: './RAQAMLI DIZAYN/dilbaroy.jpg',
      title: "Ne'matova",
      subtitle: 'Dilbaroy',
      paragraph:
        'Milliy liboslar boyicha Dizayner, Sanat va Madinay Instituti talabasi.',
      link: './en.html',
    },
    {
      imageUrl: './RAQAMLI DIZAYN/anora.jpg',
      title: 'Usmonova',
      subtitle: 'Malika',
      paragraph:
        'Milliy liboslar boyicha Dizayner, Sanat va Madinay Instituti talabasi.',
      link: './en.html',
    },
    {
      imageUrl: './RAQAMLI DIZAYN/Shokirova Iroda2.jpg',
      title: 'Shokirova',
      subtitle: 'Irodaxon',
      paragraph:
        'Manage contacts, art, activities and sales with our customer-relationship management system.',
      link: 'https://office.kunstmatrix.com/en/',
    },
  ];

  return (
    <section className="service-cards-container">
      {serviceData.map((service, index) => (
        <ServiceCard
          key={index}
          imageUrl={service.imageUrl}
          title={service.title}
          subtitle={service.subtitle}
          paragraph={service.paragraph}
          link={service.link}
        />
      ))}
    </section>
  );
};

export default ServiceCardsContainer;
