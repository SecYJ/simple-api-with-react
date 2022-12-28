const links = ["床墊優勢", "好評推薦", "運送方式", "立即預訂"];

const Header = () => {
    return (
        <>
            <div className="container flex justify-between py-10">
                <a href="#">WOWOROOM</a>
                <ul className="flex gap-12">
                    {links.map((link) => {
                        return (
                            <li key={link}>
                                <a href="#">{link}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="h-10 bg-black" />
        </>
    );
};
export default Header;
