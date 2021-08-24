import $ from './packages.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Packages({ data }) {
  return (
    <>
      <section className={classNames($.packages, 'fblSection')}>
        <h2 className={$.packageHeader}>Packages</h2>
        <p className="textCenter">
          All packages start with a 90-minute intake session. Individual sessions can be added on
          after committing to a package.
        </p>
        <p className="textCenter">
          Curious about prices?{' '}
          <Link href="/">
            <a className="textLink">Send me a message</a>
          </Link>
        </p>
        <ol className={classNames($.packageContainer, 'fblSection flexAround alignItemsBetween')}>
          {data.map(session => (
            <li key={session._key} className={$.packageTile}>
              <h3 className={$.packageName}>{session.heading}</h3>
              <ReactMarkdown>{session.copy}</ReactMarkdown>
            </li>
          ))}
        </ol>
      </section>
      <section className="fblSection">
        <div className={classNames($.sessionCta, 'flexAround alignItemsCenter')}>
          <p className={$.packageCta}>Ready to start? Let's partner</p>
          <Link href="/">
            <a className={$.packageButton}>Book a session</a>
          </Link>
        </div>
      </section>
    </>
  );
}
