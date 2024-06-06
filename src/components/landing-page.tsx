'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './styles/landing-page.css';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import Navbar from './navbar';

const LandingPage = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <section className='hero'>
          <div className='punkapepen-wrapper'>
            <img
              src='/images/logo.png'
              loading='lazy'
              alt='PunkApepen - LogoMark'
              className='punkapepen'
            />
          </div>
          <div className='container'>
            <div className='logo-wrapper'>
              <img
                src='/images/HERO.png'
                loading='lazy'
                width='513.5'
                alt='PunkApepen - LogoType'
                className='image'
              />
            </div>
            <div className='content-wrapper'>
              <p>
                <strong>BAO BAO</strong> IS the bustling realm of digital
                creativity, a delightful panda named Bao Bao is preparing to
                make its grand entrance into the world of NFTs. Created by a
                talented artist with a background in crafting beloved characters
                for iconic franchises like Angry Birds, Bao Bao is poised to
                capture the hearts of collectors and art enthusiasts alike.
                Inspired by the transformative potential of Web3 and fueled by a
                passion for innovation, the artist behind Bao Bao saw an
                opportunity to bring his whimsical creations to a new audience.
              </p>
              <p className='paragraph-2'>
                As the launch of the Bao Bao NFT collection draws near,
                anticipation is building among fans eager to add these
                enchanting pandas to their digital collections. Each Bao Bao NFT
                will be a one-of-a-kind treasure, reflecting the artists unique
                vision and storytelling prowess.
              </p>
            </div>
            <div className='content-wrapper sold-out'>
              <div>
                <h2 className='align-left'>Apply for whitelist</h2>
                <p className='paragraph-3'>only way to get WL</p>
              </div>
              <div className='wrapper-hor'>
                <Button
                  onClick={() => router.push('/form')}
                  className='btn me w-button '
                >
                  Apply
                </Button>
              </div>
            </div>
            <div className='container-4'>
              <img
                src='/images/union.png'
                loading='lazy'
                sizes='(max-width: 479px) 85vw, 408.65625px'
                alt=''
                className='punkapepen-trinity'
              />
            </div>
          </div>
        </section>

        <section>
          <div className='container-2 footer'>
            <div>
              <div className='full-block'>
                <div className='container-4'>
                  <img
                    src='/images/TOKEN.png'
                    loading='lazy'
                    sizes='(max-width: 479px) 85vw, 408.65625px'
                    alt=''
                    className='punkapepen-trinity'
                  />
                </div>
                <div className='footer-text text-sm lg:text-xl p-4'>
                  Bao Bao is also getting ready to launch its own token. This
                  token will be community-driven and have lots of cool uses. And
                  heres the best part – holders of Bao Bao NFTs might get early
                  access to the token! This could be really beneficial for NFT
                  holders, giving them a head start on getting involved with the
                  token and its community. Even though the NFTs and token havent
                  been released yet, people are already buzzing with excitement.
                  Each Bao Bao NFT will be unique and full of charm, just like
                  the artists other work. So get ready to join Bao Bao on its
                  big adventure in the world of NFTs and tokens. Its going to be
                  a lot of fun, and who knows? It could also be really
                  rewarding!
                </div>
              </div>
              <div className='full-block'></div>
            </div>
          </div>
        </section>

        <div className='fixed-links'>
          <a
            href='https://x.com/WOWbaobaoXYZ'
            target='_blank'
            className='social w-inline-block'
          >
            <img
              src='https://cdn.prod.website-files.com/65e6f23379c0b1c77c35d82a/660d24fd150fe1c23b5af3a8_X.svg'
              loading='lazy'
              alt='X Logo'
              className='link-image'
            />
          </a>
          <a href='/' target='_blank' className='social w-inline-block'>
            <img
              src='https://cdn.prod.website-files.com/65e6f23379c0b1c77c35d82a/6616944c2746023e0178769b_Discord.svg'
              loading='lazy'
              alt='Discord Logo'
              className='link-image'
            />
          </a>
        </div>

        <footer className='footer'>
          <div className='container-2 footer'>
            <div>
              <div className='full-block'>
                <h5>bao bao</h5>
              </div>
              <div className='footer-signatur'>
                <p className='paragraph'>© 2024 BaoBao. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
