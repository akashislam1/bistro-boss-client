import { useState } from "react";
import orderImg from "../../../assets/order/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useMenu from "../../../Hooks/useMenu";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useScrollTop } from "../../../Hooks/useScrollTop";

const Order = () => {
  const { pathname } = useLocation();
  useScrollTop(pathname);
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover img={orderImg} title={"OUR SHOP"}></Cover>
      <div className="my-14">
        <Tabs
          id="controlled-tabs"
          selectedTabClassName="bg-white"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="flex justify-between md:justify-center border-none items-center md:gap-2 text-sm md:text-xl md:font-bold mb-5 uppercase cursor-pointer ">
            <Tab
              className={
                tabIndex === 0
                  ? "text-[#BB8506] border-b-2  border-b-[#BB8506]"
                  : "text-black "
              }
            >
              Salad
            </Tab>
            <Tab
              className={
                tabIndex === 1
                  ? "text-[#BB8506] border-b-2  border-b-[#BB8506]"
                  : "text-black "
              }
            >
              Pizza
            </Tab>
            <Tab
              className={
                tabIndex === 2
                  ? "text-[#BB8506] border-b-2  border-b-[#BB8506]"
                  : "text-black "
              }
            >
              Soups
            </Tab>
            <Tab
              className={
                tabIndex === 3
                  ? "text-[#BB8506] border-b-2  border-b-[#BB8506]"
                  : "text-black "
              }
            >
              Desserts
            </Tab>
            <Tab
              className={
                tabIndex === 4
                  ? "text-[#BB8506] border-b-2  border-b-[#BB8506]"
                  : "text-black "
              }
            >
              Drinks
            </Tab>
          </TabList>

          <TabPanel>
            <OrderTabs items={salad}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={pizza}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={soup}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={desserts}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={drinks}></OrderTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
