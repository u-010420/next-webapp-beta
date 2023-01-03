import { meta } from './head';

export default function HomePage() {
  return (
    <>
      <div className="container-100vh">
        <div className="center-xy">

          <small className="fw-bold">{meta.sm}</small>
          <h1 className="mb-4">SOFTWAREDEV</h1>
          <a className="btn btn-outline-light">Read More</a>
          <div className="d-flex justify-content-end mt-5 fw-bold">
            <small>&#x1F4E6; Version {meta.ver}</small>
          </div>

        </div>
      </div>
    </>
  );
}
