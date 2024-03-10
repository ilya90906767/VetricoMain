import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import Question11 from '../components/question11'
import './create-a-react-table.css'

const CreateAReactTable = (props) => {
  return (
    <div className="create-a-react-table-container">
      <Helmet>
        <title>Create-a-react-table - Steep Lumpy Meerkat</title>
        <meta
          property="og:title"
          content="Create-a-react-table - Steep Lumpy Meerkat"
        />
      </Helmet>
      <div className="create-a-react-table-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer create-a-react-table-navbar-interactive"
        >
          <span className="logo">MOSAIC</span>
          <div
            data-thq="thq-navbar-nav"
            className="create-a-react-table-desktop-menu"
          >
            <nav className="create-a-react-table-links">
              <span className="bodySmall">Home</span>
              <span className="create-a-react-table-nav22 bodySmall">
                Mosaics
              </span>
              <span className="create-a-react-table-nav32 bodySmall">
                Gallery
              </span>
              <span className="create-a-react-table-nav42 bodySmall">
                Contact
              </span>
            </nav>
            <div className="create-a-react-table-buttons">
              <button className="create-a-react-table-login buttonFlat">
                Login
              </button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="create-a-react-table-burger-menu"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="create-a-react-table-icon socialIcons"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="create-a-react-table-mobile-menu1 mobileMenu"
          >
            <div className="create-a-react-table-nav">
              <div className="create-a-react-table-top">
                <span className="logo">MOSAIC</span>
                <div
                  data-thq="thq-close-menu"
                  className="create-a-react-table-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="create-a-react-table-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="create-a-react-table-links1">
                <span className="create-a-react-table-nav121 bodySmall">
                  Home
                </span>
                <span className="create-a-react-table-nav221 bodySmall">
                  Mosaics
                </span>
                <span className="create-a-react-table-nav321 bodySmall">
                  Gallery
                </span>
                <span className="create-a-react-table-nav421 bodySmall">
                  Contact
                </span>
              </nav>
              <div className="create-a-react-table-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="create-a-react-table-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="create-a-react-table-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="create-a-react-table-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="create-a-react-table-hero">
        <div className="heroContainer create-a-react-table-hero1">
          <div className="create-a-react-table-container01">
            <h1 className="create-a-react-table-hero-heading heading1">
              Discover the Beauty of Mosaics
            </h1>
            <span className="create-a-react-table-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Elevate Your Space with Exquisite Artwork</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="create-a-react-table-btn-group">
              <button className="buttonFilled">Explore Gallery</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="create-a-react-table-gallery">
        <div className="create-a-react-table-gallery1">
          <div className="create-a-react-table-container02">
            <div className="create-a-react-table-container03"></div>
          </div>
          <div className="create-a-react-table-container04">
            <div className="create-a-react-table-container05"></div>
          </div>
          <div className="create-a-react-table-container06"></div>
          <div className="create-a-react-table-container07"></div>
          <div className="create-a-react-table-container08"></div>
          <div className="create-a-react-table-container09"></div>
        </div>
      </div>
      <div className="create-a-react-table-features">
        <div className="featuresContainer">
          <div className="create-a-react-table-features1">
            <div className="create-a-react-table-container10">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="create-a-react-table-features-heading heading2">
                Elevate Your Space with Our Features
              </h2>
              <span className="create-a-react-table-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover the key features that make our mosaic artwork
                      stand out
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="create-a-react-table-container11">
              <FeatureCard2
                heading="Exquisite Collection"
                subHeading="Explore a curated selection of stunning mosaic artwork"
              ></FeatureCard2>
              <FeatureCard2
                heading="Customization Options"
                subHeading="Personalize your space with bespoke mosaic designs"
              ></FeatureCard2>
              <FeatureCard2
                heading="Expert Craftsmanship"
                subHeading="Each mosaic is handcrafted by skilled artisans for a unique touch"
              ></FeatureCard2>
              <FeatureCard2
                heading="Easy Installation"
                subHeading="Simple installation process to elevate your space effortlessly"
              ></FeatureCard2>
            </div>
          </div>
        </div>
      </div>
      <div className="create-a-react-table-banner">
        <div className="bannerContainer create-a-react-table-banner1">
          <h1 className="create-a-react-table-banner-heading heading2">
            Discover the Beauty of Mosaics
          </h1>
          <span className="create-a-react-table-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Immerse yourself in a world of intricate designs and vibrant
                  colors with our exquisite collection of mosaic artwork. Each
                  piece tells a unique story and adds a touch of elegance to any
                  space. Explore our gallery to find the perfect mosaic for your
                  home or office.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Explore Gallery</button>
        </div>
      </div>
      <div className="create-a-react-table-faq">
        <div className="faqContainer">
          <div className="create-a-react-table-faq1">
            <div className="create-a-react-table-container12">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="create-a-react-table-text48 heading2">
                Common questions
              </h2>
              <span className="create-a-react-table-text49 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="create-a-react-table-container13">
              <Question11
                answer="Our mosaics are crafted using a variety of materials such as glass, ceramic, stone, and metal to create intricate and stunning designs."
                question="What materials are used to create the mosaics?"
              ></Question11>
              <Question11
                answer="Yes, we offer custom design services to create unique mosaics tailored to your preferences and space requirements."
                question="Can I request a custom design for a mosaic?"
              ></Question11>
              <Question11
                answer="Our team of skilled professionals can assist with the installation process to ensure that the mosaics are securely and beautifully placed in your desired location."
                question="How are the mosaics installed?"
              ></Question11>
              <Question11
                answer="Yes, we provide international shipping services to deliver our mosaics to customers worldwide."
                question="Do you offer international shipping for the mosaics?"
              ></Question11>
              <Question11
                answer="We have a flexible return policy in place. Please refer to our Returns &amp; Exchanges page for more information on our policies."
                question="What is the return policy for the mosaics?"
              ></Question11>
            </div>
          </div>
        </div>
      </div>
      <div className="create-a-react-table-footer"></div>
    </div>
  )
}

export default CreateAReactTable
