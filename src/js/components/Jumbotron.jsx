export const Jumbotron = () => {
    return (

        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="bg-light p-4 p-md-5 rounded shadow-sm">
                    <h1>A Warm Welcome!</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <hr className="my-4" />
                    <a className="btn btn-primary btn-lg" href="#" role="button">
                        Call to Action!
                    </a>
                </div>
            </div>
        </div>

    );
};