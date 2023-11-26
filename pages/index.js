function Home () {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <h1>Agora vai!</h1>
            <p style={{marginTop: 0}}>Mais um deploy com sucesso</p>
        </div>
    )

}

export default Home;