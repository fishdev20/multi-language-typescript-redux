import { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

// import aboutImg from '../assets/about.jpg';
import Header from '../components/Header';
import { translate } from '../i18n';
import { RootState } from '../store';

const About: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return(
    <Fragment>
      <Header />
      <section className="about">
        <div className="container">
          <h1>{translate('about', language)}</h1>
          <img src={'https://th.bing.com/th/id/R.84d81a31b027c80c048f592e269b567b?rik=mFy2nC6sBtnHxQ&pid=ImgRaw&r=0'} alt="" />
          <p>{translate('aboutUsText', language)}</p>
        </div>
      </section>
    </Fragment>
  );
}

export default About;