export default function Container({ children, ...rest }) {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                margin: '0 auto',
                maxWidth: '60ch',
                padding: '0 1rem',
                width: '100%',
                ...rest.style,
            }}
            {...rest}
        >
            {children}
        </div>
    );
}
