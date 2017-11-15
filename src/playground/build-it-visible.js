let visibility = true;

const toggleVisibility  = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? "Hide Details" : "Show Details"}
            </button>
            {visibility && (
                <div>
                    <p>You can see this text.</p>
                </div>
            )}
            <p></p>
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
}

render();
