import ContentLoader from "react-content-loader";

export const MainLoader = (props) => (
    <div className="flex justify-center w-full h-full">
        <ContentLoader
            speed={1}
            width={450}
            height={500}
            viewBox="0 0 450 500"
            backgroundColor="#eeeeec"
            foregroundColor="#e8bbbb"
            {...props}
        >
            <circle cx="590" cy="182" r="122" />
            <rect x="267" y="299" rx="0" ry="0" width="2" height="3" />
            <circle cx="63" cy="213" r="37" />
            <circle cx="183" cy="212" r="37" />
            <circle cx="296" cy="212" r="37" />
        </ContentLoader>
    </div>
);
