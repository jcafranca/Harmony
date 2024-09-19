import ProLayout, { MenuDataItem } from "@ant-design/pro-layout";
import "./App.css";
import { Footer } from "./components";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarOutlined,
  ContactsOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  FileZipOutlined,
  MedicineBoxOutlined,
  SettingOutlined,
} from "@ant-design/icons";
export interface RenderIconInfo {
  isSelected?: boolean;
  isOpen?: boolean;
  isSubMenu?: boolean;
  disabled?: boolean;
}
export type RenderIconType =
  | React.ReactNode
  | ((props: RenderIconInfo) => React.ReactNode);
interface MenuItem {
  type?: "item";
  label?: React.ReactNode;
  key: React.Key;
  icon?: ReactElement;
  disabled?: boolean;
  children?: MenuItem[];
}

function App() {
  const [pathname, setPathName] = useState();
  const items: MenuItem[] = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <DashboardOutlined />,
    },
    {
      label: "Schedule",
      key: "schedule",
      icon: <CalendarOutlined />,
    },
    {
      label: "Accounts",
      key: "account",
      icon: <ContactsOutlined />,
      disabled: false,
      children: [
        {
          key: "doctor",
          label: "Doctors",
        },
        {
          key: "nurse",
          label: "Nurse",
        },
      ],
    },
    {
      label: "Visits",
      key: "visit",
      icon: <EnvironmentOutlined />,
    },
    {
      label: "Patients",
      key: "patient",
      icon: <MedicineBoxOutlined />,
    },
    {
      label: "Billing",
      key: "billing",
      icon: <CreditCardOutlined />,
    },
    {
      label: "Payment",
      key: "payment",
      icon: <DollarOutlined />,
    },
    {
      label: "Settings",
      key: "setting",
      icon: <SettingOutlined />,
    },
    {
      label: "Reports",
      key: "report",
      icon: <FileZipOutlined />,
    },
  ];

  const menuDataRender = (): MenuDataItem[] => {
    return items.map((item) => ({
      name: String(item.label),
      path: String(item?.key),
      icon: item.icon,
      children: item.children?.map((subItem) => ({
        name: String(subItem.label),
        path: String(subItem?.key),
      })),
    }));
  };

  return (
    <ProLayout
      title="Harmony ER"
      footerRender={Footer}
      menuDataRender={menuDataRender}
      location={{ pathname }} // Set the current active path
      menuItemRender={(item, dom) => (
        <Link to={item.path ?? ""} onClick={() => item.path ?? setPathName(item.path)}>
          {dom}
        </Link>
      )}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        quae ullam blanditiis corporis quam officia qui laboriosam iusto,
        laudantium assumenda incidunt odit minus recusandae cumque, doloremque
        doloribus debitis iste cupiditate.
      </p>
    </ProLayout>
  );
}

export default App;
