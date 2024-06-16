// import { ScrollRestoration } from "react-router-dom";

const ScrollRestoreationTest = () => {
  const sectionStyle = "bg-sky-200 shadow-md rounded-lg p-4 mb-4";
  const titleStyle = "text-lg font-bold";
  const paragraphStyle = "text-gray-600";

  return (
    <div>
        {/* <ScrollRestoration /> */}
        <h1>ScrollRestoreationTest</h1>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 1</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 2</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 3</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 4</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 5</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 5</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 5</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 5</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 5</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 5</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 5</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={`${sectionStyle} cursor-pointer`}
            onClick={() => {
                // naver로 이동
                window.location.href = "https://www.naver.com";
            }}
        >
            <h2 className={titleStyle}>네이버로 이동</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 5</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle}>
            <h2 className={titleStyle}>Section 5</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
        <div className={sectionStyle.slice(0, -4)}> {/* Remove the margin-bottom for the last section */}
            <h2 className={titleStyle}>Section 6</h2>
            <p className={paragraphStyle}>Scroll to the bottom of this section to see the scroll restoration.</p>
        </div>
    </div>
  )
};

export default ScrollRestoreationTest;

