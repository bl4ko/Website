export default function Box({ children, ...rest }) {
    return (
        <div
            style={{
                ...rest.style,
            }}
            {...rest}
        >
            {children}
        </div>
    );
}