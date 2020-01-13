import Head from 'next/head'

export default () => {
  return (
    <>
      <Head>
        <link rel='alternate' type='application/rss+xml' title='Nyheter fra nav.no' href='https://www.nav.no/no/rss' />
        <link rel='apple-touch-icon' href='https://www.nav.no/_/asset/no.nav.navno:1578062697/img/navno/logo.png' />
        <link rel='shortcut icon' type='image/x-icon' href='https://www.nav.no/_/asset/no.nav.navno:1578062697/img/navno/favicon.ico' />
        <link rel='stylesheet' href='https://www.nav.no/_/asset/no.nav.navno:1578062697/styles/navno.css' />
        <script src='https://www.nav.no/_/asset/no.nav.navno:1578062697/js/optimize.js' />
        <script src='https://www.nav.no/_/asset/no.nav.navno:1578062697/libs/modernizr.2.7.1.min.js' />
        <script src='https://www.nav.no/_/asset/no.nav.navno:1578062697/js/innloggingslinjen.min.js' />
        <script id='navno-props' src='https://www.nav.no/_/asset/no.nav.navno:1578062697/js/navno-page.js' seksjonssider='person' authserviceurl='https://www.nav.no/innloggingslinje-api/auth' />
        <script async src='https://www.nav.no/_/asset/no.nav.navno:1578062697/js/navno.js' />
      </Head>
      <header data-portal-component-type='part' className='siteheader'>
        <div className='site-coltrols-toolbar site-controls-toolbar'>
          <div className='container'>
            <div className='row navbar'>
              <div className='col-md-12'>
                <div className='settings'>
                  <ul className='nav'>
                    <li className='dropdown'>
                      <button type='button' className='link-btn dropdown-toggle' data-toggle='dropdown'>Language <span className='caret' /></button>
                      <ul className='dropdown-menu hidden' aria-expanded='false'>
                        <li className='active'>
                          <a href='/no' title='Norsk (Globalt språkvalg)'>
                                            Norsk
                          </a>
                        </li>
                        <li>
                          <a href='/en' title='English (Globalt språkvalg)'>
                                            English
                          </a>
                        </li>
                        <li>
                          <a href='/se' title='Sámegiella (Globalt Språkvalg)'>
                                            Sámegiella
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id='high-contrast'>
                      <button type='button' className='link-btn'>
                                    Høykontrast
                      </button>
                    </li>
                    <li id='text-size-accessibility'>
                      <span className='link-btn' role='button' tabIndex='0' aria-label='Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk samtidig på + for å forstørre eller - for å forminske.'>
                                    Skriftstørrelse
                      </span>
                      <div className='text-size-tooltip hidden'>
                        <p>
                                        Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk samtidig på + for å forstørre eller - for å forminske.
                        </p>
                        <span className='arrow' />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='login-container'>
                  <div id='login-details' className='hidden' data-hj-masked='' data-hj-suppress=''>
                    <span id='name-container'>
                      <img id='idporten-ikon-innlogging' alt='Innlogget via ID-porten' src='https://www.nav.no/_/asset/no.nav.navno:1578062697/img/navno/gfx/icons/idporten_ikon.png' />
                      <span id='name' />
                    </span>
                    <div className='logout-tooltip hidden'>
                      <a className='lukk hidden' aria-label='Lukk informasjon om logg ut'> × </a>
                      <p>
                                    Du er logget inn på alle offentlige tjenester med ID-porten/MinID.
                      </p>
                      <p>Husk å <strong>logge ut</strong> når du er ferdig.</p>
                      <span className='arrow' />
                    </div>
                  </div>
                  <div id='auth-btns'>
                    <a id='login' className='knapp mini btn-auth btn-login' href='https://tjenester.nav.no/dittnav/oversikt'>
                                Logg inn
                    </a>
                    <a id='logout' className='hidden btn-auth knapp mini hoved btn-logout' data-ga='Header' href='https://loginservice.nav.no/slo'>
                                Logg ut
                    </a>
                  </div>
                  <div className='login-tooltip hidden'>
                    <p>Logg inn på Ditt NAV</p>
                    <span className='arrow' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sitelogo sitelogo-large'>
          <div className='container'>
            <a href='/' title='Hjem' data-ga='Header/Logo'>
              <img src='https://www.nav.no/_/asset/no.nav.navno:1578062697/img/navno/logo.svg' alt='NAV-logo' />
            </a>
          </div>
        </div>
        <div className='sitelogo sitelogo-small'>
          <a href='/' title='Hjem'>
            <img src='https://www.nav.no/_/asset/no.nav.navno:1578062697/img/navno/logo.svg' alt='NAV-logo' />
          </a>
        </div>
        <div data-portal-region='region-north' />
        <div className='topnavsection-wrapper'>
          <div className='topnavsection'>
            <nav className='topnav container' id='mainmenu' aria-labelledby='header-nav-heading' tabIndex='-1'>
              <h1 className='visuallyhidden' id='header-nav-heading'>
                    Hovedmeny
              </h1>
              <input id='no-js-toggle-mobile-mainmenu' type='checkbox' className='visuallyhidden mobile-toggler' aria-hidden='true' />
              <label htmlFor='no-js-toggle-mobile-mainmenu' className='mobile-toggler toggle-mainmenu' aria-hidden='true'>
                    Meny
              </label>
              <button type='button' id='toggle-mobile-mainmenu' className='link-btn mobile-toggler toggle-mainmenu' aria-hidden='true'>
                    Meny
              </button>
              <ul className='accessible-megamenu' id='accessible-megamenu'>
                <li className='topnavitem has-children'>
                  <a role='button' data-ga='Meny' href='/no/person' id='accessible-megamenu-1578933657906-1' aria-haspopup='true' aria-owns='accessible-megamenu-1578933657906-2' aria-controls='accessible-megamenu-1578933657906-2' aria-expanded='false'>
                            Person
                  </a>
                  <div className='panel-wrapper'>
                    <div className='accessible-megamenu-panel' id='accessible-megamenu-1578933657906-2' role='group' aria-expanded='false' aria-hidden='true' aria-labelledby='accessible-megamenu-1578933657906-1'>
                      <div className='tilbaketilgruppe typo-normal'>
                        <a className='home-link' href='/no/person' data-ga='Meny/Person'>
                          <span className='lenke-fremhevet tilbaketilforsidelink'>
                                            Gå til forside
                          </span>
                        </a>
                        <span className='tilbaketittel'>Person</span>
                      </div>
                      <ul className='subnavitems'>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657910-10'>
                                            Arbeid
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657910-9'>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/veiledearbeidssoker/?sprak=nb'>
                                                    Arbeidsledig og jobbsøker
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/arbeid/dagpenger-ved-arbeidsloshet-og-permittering'>
                                                    Dagpenger når du er arbeidsledig eller permittert
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/arbeid/sykmeldt-arbeidsavklaringspenger-og-yrkesskade'>
                                                    Sykmelding og sykepenger
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/arbeid/arbeidsavklaringspenger'>
                                                    Arbeidsavklaringspenger
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/arbeid/oppfolging-og-tiltak-for-a-komme-i-jobb'>
                                                    Oppfølging og tiltak for å komme i jobb
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/arbeid/yrkesskade-og-yrkessykdom'>
                                                    Yrkesskade og yrkessykdom
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/veiledearbeidssoker/ung-lite-erfaring?sprak=nb'>
                                                    Ungdom
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657910-12'>
                                            Familie
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657910-11'>
                            <li>
                              <a data-ga='Meny' href='http://familie.nav.no/'>
                                                    Foreldrepenger, svangerskapspenger og engangsstønad
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/familie/barnetrygd-og-kontantstotte'>
                                                    Barnetrygd og kontantstøtte
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/familie/enslig-mor-eller-far'>
                                                    Enslig mor eller far
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/familie/farskap-og-morskap'>
                                                    Farskap og morskap
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/familie/barne-og-ektefellebidrag'>
                                                    Barnebidrag
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://www.nav.no/familie/sykdom-i-familien/nb/'>
                                                    Sykdom i familien
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/familie/grunn-og-hjelpestonad'>
                                                    Grunn- og hjelpestønad
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/familie/ytelser-ved-dodsfall'>
                                                    Ytelser ved dødsfall
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657910-14'>
                                            Pensjon
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657910-13'>
                            <li>
                              <a data-ga='Meny' href='/no/person/pensjon/alderspensjon'>
                                                    Alderspensjon
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/pensjon/hva-kan-jeg-fa-i-pensjon'>
                                                    Din pensjon
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/pensjon/avtalefestet-pensjon-afp'>
                                                    Avtalefestet pensjon (AFP)
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/pensjon/pensjonsopptjening-for-omsorgsarbeid'>
                                                    Pensjonsopptjening for omsorgsarbeid (omsorgsopptjening)
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/pensjon/uforetrygd'>
                                                    Uføretrygd
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/pensjon/andre-pensjonsordninger'>
                                                    Andre pensjonsordninger
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-16'>
                                            Hjelpemidler
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657910-15'>
                            <li>
                              <a data-ga='Meny' href='/no/person/hjelpemidler/hva-har-du-vansker-med'>
                                                    Hva har du vansker med?
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/hjelpemidler/hvor-trenger-du-hjelp'>
                                                    Hvor trenger du hjelp?
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/hjelpemidler/tjenester-og-produkter'>
                                                    Tjenester og produkter
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/hjelpemidler/hvordan-soke'>
                                                    Hvordan søke om hjelpemidler?
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-18'>
                                            Flere tema
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657911-17'>
                            <li>
                              <a data-ga='Meny' href='/no/person/flere-tema/sosiale-tjenester'>
                                                    Sosiale tjenester og økonomisk sosialhjelp
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/flere-tema/arbeid-og-opphold-i-utlandet'>
                                                    Arbeid og opphold i utlandet
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/flere-tema/arbeid-og-opphold-i-norge'>
                                                    Arbeid og opphold i Norge
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kontakt-nav/kurs-fra-nav'>
                                                    Kurs fra NAV
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://www.nav.no/person/kontakt-oss/tilbakemeldinger'>
                                                    Klage, anke og ros
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kontakt-nav/utbetalinger'>
                                                    Utbetalinger
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/om-nav/saksbehandlingstider-i-nav'>
                                                    Saksbehandlingstider i NAV
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/person/flere-tema/innkreving-og-innbetaling'>
                                                    Innkreving og innbetaling
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='topnavitem has-children'>
                  <a role='button' data-ga='Meny' href='/no/bedrift' id='accessible-megamenu-1578933657907-3' aria-haspopup='true' aria-owns='accessible-megamenu-1578933657907-4' aria-controls='accessible-megamenu-1578933657907-4' aria-expanded='false'>
                            Bedrift
                  </a>
                  <div className='panel-wrapper'>
                    <div className='accessible-megamenu-panel' id='accessible-megamenu-1578933657907-4' role='group' aria-expanded='false' aria-hidden='true' aria-labelledby='accessible-megamenu-1578933657907-3'>
                      <div className='tilbaketilgruppe typo-normal'>
                        <a className='home-link' href='/no/bedrift' data-ga='Meny/Person'>
                          <span className='lenke-fremhevet tilbaketilforsidelink'>
                                            Gå til forside
                          </span>
                        </a>
                        <span className='tilbaketittel'>Bedrift</span>
                      </div>
                      <ul className='subnavitems'>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-20'>
                                            Tjenester og skjemaer
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657911-19'>
                            <li>
                              <a data-ga='Meny' href='https://arbeidsgiver.nav.no/min-side-arbeidsgiver/'>
                                                    Min side – arbeidsgiver
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://www.nav.no/soknader/nb/bedrift'>
                                                    Skjemaer for arbeidsgivere og tiltaksarrangører
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester'>
                                                    Altinn - refusjoner, søknader, rapporter, foreldre-, omsorgs- og pleiepenger m.m.
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/tjenester-og-skjemaer/aa-registeret-og-a-meldingen'>
                                                    Aa-registeret
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/tjenester-og-skjemaer/meld-yrkesskade-og-yrkessykdom'>
                                                    Meld yrkesskade og yrkessykdom
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/tjenester-og-skjemaer/innkreving-og-innbetaling'>
                                                    Innkreving og innbetaling
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/tjenester-og-skjemaer/selvstendig-naringsdrivende-med-flere'>
                                                    Selvstendig næringsdrivende og andre grupper
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-22'>
                                            Rekruttering
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657911-21'>
                            <li>
                              <a data-ga='Meny' href='https://arbeidsgiver.nav.no/kontakt-oss/'>
                                                    Kontakt NAV – arbeidsgiver
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://arbeidsplassen.nav.no/bedrift'>
                                                    Annonser stilling eller finn kandidater i CV-basen
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/rekruttering/rekruttere-hjelp-og-selvhjelp'>
                                                    Ønsker  du hjelp fra NAV til å rekruttere?
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/veiviserarbeidsgiver/rekruttere-og-inkludere/ansette'>
                                                    Tilby jobb til en person som trenger tilrettelegging
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/veiviserarbeidsgiver/rekruttere-og-inkludere/arbeidstrening'>
                                                    Tilby arbeidstrening med hjelp fra NAV
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-24'>
                                            Oppfølging
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657911-23'>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/oppfolging/sykmeldt-arbeidstaker'>
                                                    Sykmeldt arbeidstaker
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/veiviserarbeidsgiver/tilrettelegge'>
                                                    Tilrettelegge for ansatte med helseutfordringer
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/oppfolging/har-du-ansatte-som-sliter-psykisk'>
                                                    Har du ansatte som sliter psykisk?
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/oppfolging/permittering-og-omstilling'>
                                                    Permittering og omstilling
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-26'>
                                            Inkluderende arbeidsliv
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657911-25'>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/veiviserarbeidsgiver/samleside'>
                                                    Veiviser for inkludering
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/inkluderende-arbeidsliv/kontakt-nav-arbeidslivssenter'>
                                                    Inkluderende arbeidsliv
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/lokalt/vestland/nav-arbeidslivssenter-vestland/webinar'>
                                                    Webinar
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='http://www.idebanken.org/'>
                                                    Idébanken - for et arbeidsliv som inkluderer
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://www.altinn.no/no/Skjema-og-tjenester/Etater/NAV/Sykefravarsstatistikk-for-IA-virksomheter/'>
                                                    Sykefraværsstatistikk fra NAV (Altinn)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-28'>
                                            Hjelpemidler
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657911-27'>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/hjelpemidler/kartlegging-og-radgivning'>
                                                    Tilrettelegging i arbeid
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/hjelpemidler/tolking-pa-arbeidsplassen'>
                                                    Tolking på arbeidsplassen
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/hjelpemidler/funksjonsassistanse'>
                                                    Funksjonsassistanse
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/bedrift/hjelpemidler/lese-og-sekretarhjelp'>
                                                    Lese- og sekretærhjelp
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='topnavitem has-children'>
                  <a role='button' data-ga='Meny' href='/no/nav-og-samfunn' id='accessible-megamenu-1578933657908-5' aria-haspopup='true' aria-owns='accessible-megamenu-1578933657908-6' aria-controls='accessible-megamenu-1578933657908-6' aria-expanded='false'>
                            NAV og samfunn
                  </a>
                  <div className='panel-wrapper'>
                    <div className='accessible-megamenu-panel' id='accessible-megamenu-1578933657908-6' role='group' aria-expanded='false' aria-hidden='true' aria-labelledby='accessible-megamenu-1578933657908-5'>
                      <div className='tilbaketilgruppe typo-normal'>
                        <a className='home-link' href='/no/nav-og-samfunn' data-ga='Meny/Person'>
                          <span className='lenke-fremhevet tilbaketilforsidelink'>
                                            Gå til forside
                          </span>
                        </a>
                        <span className='tilbaketittel'>NAV og samfunn</span>
                      </div>
                      <ul className='subnavitems'>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-30'>
                                            Statistikk
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657911-29'>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/statistikk/arbeidssokere-og-stillinger-statistikk'>
                                                    Arbeidssøkere og stillinger - statistikk
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/statistikk/sykefravar-statistikk'>
                                                    Sykefravær - statistikk
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/statistikk/aap-nedsatt-arbeidsevne-og-uforetrygd-statistikk'>
                                                    AAP, nedsatt arbeidsevne og uføretrygd - statistikk
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/statistikk/familie-statistikk'>
                                                    Familie - statistikk
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/statistikk/pensjon-statistikk'>
                                                    Pensjon - statistikk
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/statistikk/flere-statistikkomrader'>
                                                    Flere statistikkområder
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/statistikk/publiseringskalender'>
                                                    Publiseringskalender
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-32'>
                                            Kunnskap
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657911-31'>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kunnskap/analyser-fra-nav'>
                                                    Analyser fra NAV
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kunnskap/forskningsrapporter-og-evalueringer-finansiert-av-nav'>
                                                    Forskningsrapporter og evalueringer finansiert av NAV
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kunnskap/fou-midler'>
                                                    FoU-midler
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kunnskap/samarbeid-med-universitet-og-hoyskoler'>
                                                    Samarbeid med universitet og høyskoler
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kunnskap/forsok-i-regi-av-nav'>
                                                    Pågående forsøk
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kunnskap/arrangementer'>
                                                    Arrangementer
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kunnskap/infografikk-fra-nav'>
                                                    Infografikk fra NAV
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-34'>
                                            Samarbeid
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657911-33'>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/samarbeid/leger-og-andre-behandlere'>
                                                    Leger og andre behandlere
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/samarbeid/hjelpemidler'>
                                                    Hjelpemidler - for samhandlere
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/samarbeid/tilskudd-gjennom-nav'>
                                                    Tilskudd gjennom NAV
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/samarbeid/arbeid-og-psykisk-helse'>
                                                    Arbeid, psykisk helse og samhandlere
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/samarbeid/samarbeidsavtaler-pa%CC%8A-utdanningsomra%CC%8Adet'>
                                                    Samarbeidsavtaler på utdanningsområdet
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/samarbeid/for-kommunen'>
                                                    For kommunen
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/samarbeid/arbeidslivskriminalitet-og-trygdesvindel'>
                                                    Arbeidslivskriminalitet og trygdesvindel
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-36'>
                                            Om NAV
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657911-35'>
                            <li>
                              <a data-ga='Meny' href='https://lovdata.no/nav/'>
                                                    Lover og regler
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/om-nav/personvern-i-arbeids-og-velferdsetaten'>
                                                    Personvern i Arbeids- og velferdsetaten
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/om-nav/fakta-om-nav'>
                                                    Fakta om NAV
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/om-nav/a%CC%8Arsrapport'>
                                                    Årsrapport
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/om-nav/sok-jobb-i-nav'>
                                                    Søk jobb i NAV
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/om-nav/brukermedvirkning'>
                                                    Brukermedvirkning
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/om-nav/saksbehandlingstider-i-nav'>
                                                    Saksbehandlingstider i NAV
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/om-nav/innkjop-og-faktura'>
                                                    Innkjøp og faktura
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657911-38'>
                                            Kontakt NAV
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657911-37'>
                            <li>
                              <a data-ga='Meny' href='https://www.nav.no/person/kontakt-oss/'>
                                                    Kontakt oss
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kontakt-nav/nav-i-ditt-fylke'>
                                                    NAV i ditt fylke
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kontakt-nav/utbetalinger'>
                                                    Utbetalinger
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kontakt-nav/presse'>
                                                    Presse
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kontakt-nav/teknisk-brukerstotte'>
                                                    Teknisk brukerstøtte
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://www.nav.no/person/kontakt-oss/tilbakemeldinger'>
                                                    Klage, anke og ros
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='/no/nav-og-samfunn/kontakt-nav/kurs-fra-nav'>
                                                    Kurs fra NAV
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='topnavitem has-children'>
                  <a role='button' data-ga='Meny' href='/no/ditt-nav' id='accessible-megamenu-1578933657909-7' aria-haspopup='true' aria-owns='accessible-megamenu-1578933657909-8' aria-controls='accessible-megamenu-1578933657909-8' aria-expanded='false'>
                            Ditt NAV
                  </a>
                  <div className='panel-wrapper'>
                    <div className='accessible-megamenu-panel' id='accessible-megamenu-1578933657909-8' role='group' aria-expanded='false' aria-hidden='true' aria-labelledby='accessible-megamenu-1578933657909-7'>
                      <div className='tilbaketilgruppe typo-normal'>
                        <a className='home-link' href='/no/ditt-nav' data-ga='Meny/Person'>
                          <span className='lenke-fremhevet tilbaketilforsidelink'>
                                            Gå til forside
                          </span>
                        </a>
                        <span className='tilbaketittel'>Ditt NAV</span>
                      </div>
                      <ul className='subnavitems'>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657912-40'>
                                            Din oversikt
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657912-39'>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/esso/saml2/jsp/spSSOInit.jsp?metaAlias=/sp&amp;idpEntityID=idporten.difi.no-v4&amp;NameIDFormat=transient&amp;goto=https://tjenester.nav.no/saksoversikt/&amp;AuthLevel=4'>
                                                    Dine saker
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/esso/saml2/jsp/spSSOInit.jsp?metaAlias=/sp&amp;idpEntityID=idporten.difi.no-v4&amp;NameIDFormat=transient&amp;goto=https://tjenester.nav.no/mininnboks/&amp;AuthLevel=4'>
                                                    Din innboks
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/utbetalingsoversikt/'>
                                                    Dine utbetalinger
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/esso/saml2/jsp/spSSOInit.jsp?metaAlias=/sp&amp;idpEntityID=idporten.difi.no-v4&amp;NameIDFormat=transient&amp;goto=https://tjenester.nav.no/brukerprofil/&amp;AuthLevel=4'>
                                                    Endre kontonummer/adresse
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://www.nav.no/soknader'>
                                                    Send ny søknad
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://www.nav.no/ettersendelse'>
                                                    Ettersend vedlegg
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://www.nav.no/person/kontakt-oss/'>
                                                    Send beskjed til NAV
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://www.nav.no/person/personopplysninger'>
                                                    Personopplysninger
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657912-42'>
                                            Arbeid
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657912-41'>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/veiledearbeidssoker/mistet-jobben/registrering'>
                                                    Registrer deg som arbeidssøker
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://www.nav.no/meldekort/'>
                                                    Send meldekort
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://arbeidsplassen.nav.no/stillinger'>
                                                    Finn ledige stillinger
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://arbeidsplassen.nav.no/minside'>
                                                    Din CV
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://stillingsok.nav.no/pam-stillingsok/lagrede-sok'>
                                                    Dine lagrede søk
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/aktivitetsplan/'>
                                                    Din aktivitetsplan
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='accessible-megamenu-panel-group'>
                          <h2 className='h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel' id='accessible-megamenu-1578933657912-44'>
                                            Flere tjenester
                          </h2>
                          <ul className='menu-link-list mobile-submenu' id='accessible-megamenu-1578933657912-43'>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/pselv/publisering/dinpensjon.jsf?context=pensjon'>
                                                    Din pensjon
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/pselv/publisering/uforetrygd.jsf?context=ut'>
                                                    Din uføretrygd
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://tjenester.nav.no/sykefravaer/'>
                                                    Ditt sykefravær
                              </a>
                            </li>
                            <li>
                              <a data-ga='Meny' href='https://foreldrepenger.nav.no'>
                                                    Dine foreldrepenger
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='topnavitem mobile-only'>
                  <div id='auth-btns-mobil' className='login-container'>
                    <a id='login-mobil' className='knapp liten btn-auth btn-login' href='https://tjenester.nav.no/dittnav/oversikt'>
                                Logg inn
                    </a>
                    <a id='logout-mobil' className='hidden knapp liten hoved btn-auth btn-logout' href='https://loginservice.nav.no/slo'>
                                Logg ut
                    </a>
                  </div>
                </li>
              </ul>
              <button type='button' id='toggle-varsler-mobile' className='toggle-varsler-mobile link-btn mobile-toggler invisible' aria-label='Varsler' title='Varsler' aria-hidden='true' />
              <input id='no-js-toggle-mobile-search' type='checkbox' className='visuallyhidden mobile-toggler' aria-hidden='true' />
              <label htmlFor='no-js-toggle-mobile-search' className='mobile-toggler toggle-search' aria-hidden='true'>
                    Søk
              </label>
              <button type='button' id='toggle-mobile-search' className='link-btn mobile-toggler toggle-search' aria-hidden='true'>
                <span>Søk</span>
              </button>
              <form action='/sok' method='get' className='sitesearch' id='sitesearch' role='search'>
                <div className='inputwrapper'>
                  <input type='hidden' name='language' value='no' />
                  <input type='search' id='site-search-input' name='ord' maxLength='200' className='input-sitesearch' placeholder='Søk på nav.no' aria-label='Søk' />
                  <input type='submit' className='btn-sitesearch' value='Søk' />
                </div>
              </form>
              <div id='toggle-varsler-container' className='toggle-varsler-container'>
                <button type='button' id='toggle-varsler' className='toggle-varsler invisible' aria-controls='varsler-display' aria-expanded='false' aria-label='Varsler' title='Varsler' data-base-url='https://tjenester.nav.no' data-tekst-varselurl-lenketekst='Gå til meldingen' data-tekst-ingenvarsler='Du har ingen varsler å vise' data-tekst-error='Det oppstod et problem under henting av varslene dine' data-tekst-visalle='Vis alle dine varsler' data-tekst-visalle-nye-flertall='nye' data-tekst-visalle-nye-entall='ny' />
              </div>
              <div role='tooltip' id='globalmenu-upgrade-info-tooltip' className='panel-negativ hidden' aria-hidden='true'>
                <div className='lukk'>
                  <button id='globalmenu-upgrade-info-close'>
                    <span className='vekk'>
                                Lukk
                    </span>
                  </button>
                </div>
                <h3 className='decorated hjelpetekst-tittel js-tittel'>
                        Info
                </h3>
                <p className='hjelpetekst-tekst js-tekst'>
                        Tjenester med hengelås krever et høyere sikkerhetsnivå enn du er innlogget med.
                </p>
              </div>
            </nav>
          </div>
        </div>

        <div id='varsler-display' className='varsler-display' aria-expanded='false' />
      </header>
    </>
  )
}
