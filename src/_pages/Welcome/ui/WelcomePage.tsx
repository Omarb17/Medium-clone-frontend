import Navbar from "@/src/widgets/Navbar";

const WelcomePage = () => {
  return (
    <Navbar
      hasSidebarButton={false}
      hasSearchBar={false}
      isWelcomePage={true}
    />
  );
};

export default WelcomePage;
