import React from 'react';

const SectionWithSubheaders = () => {
  return (
    <section className="padding-bottom-zero">
      <div className="centered-header with-subheaders">
        <h2 style={{ maxWidth: '20em' }}>
          3D Design <span>test sinovi</span> va <span>ishlash jarayoni</span>{' '}
          bilan tanishuv
        </h2>
        <div className="subheaders">
          <div>
            <h3>1-About Section</h3>
            <p>
              Here we have our projects, <br />
              <del>the placement process has not been completed</del>
            </p>
          </div>
          <div>
            <h3>2-About Section</h3>
            <p>
              Here we have our projects, <br />
              <del>the placement process has not been completed</del>
            </p>
          </div>
          <div>
            <h3>3-About Section</h3>
            <p>
              Here we have our projects, <br />
              <del>the placement process has not been completed</del>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWithSubheaders;
