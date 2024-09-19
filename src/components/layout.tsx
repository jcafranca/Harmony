import { Outlet } from 'react-router-dom';
import Footer from './footer';
import { Question } from './header-component';
import { AvatarDropdown } from './header-component/avatar-dropdown';// Replace with your components

export const Layout = () => {

  return (
    <>
      {/* Actions Render */}
      <div className="actions-render">
        <Question key="doc" />
      </div>

      {/* Avatar Props */}
      <div className="avatar-props">
        <AvatarDropdown>
          Jerome Cafranca
        </AvatarDropdown>
      </div>

      {/* Watermark Props */}
      <div className="watermark">
        <p>Jerome Cafranca</p>
      </div>

      {/* Footer */}
      <Footer />


      {/* Children Rendering */}
      <div className="children-container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
