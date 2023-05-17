export default function UseMiddleware({ middleware, children }) {
    const result = middleware("",() => {
        console.log("Middleware passed");
        return <>{children}</>;
    });

    return result;
}
