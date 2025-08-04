import React from 'react'; 
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import BuyVouchersIsland from './BuyVouchers.jsx?island';
import styles from './BuyVoucher.module.css';

export function Component({ fieldValues }) {
  const {
    title = 'Digital Gift Vouchers',
    subTitle = 'Send perfect gifts instantly to your loved ones.',
    heroBackgroundImage = '',
    voucher1Label = 'Shoprite Vouchers',
    voucher1Price = 'From R10',
    voucher1Range = 'R10 - R1000',
    voucher1Value = 'shoprite',
    voucher1Delivery = 'Instant delivery',
    voucher1Image = '',
    voucher2Label = 'Shoprite Group Virtual Grocery Vouchers',
    voucher2Price = 'From R50.00',
    voucher2Range = 'R50 - R1000',
    voucher2Value = 'shoprite-group',
    voucher2Delivery = 'Instant delivery',
    voucher2Image = '',
    securityBadge1 = '',
    securityBadge2 = '',
    hydrateOn = 'load',
    islandIdPrefix = '',
  } = fieldValues;

  const islandId = `${islandIdPrefix}buy-vouchers`;

  return (
    <Island
      id={islandId}
      module={BuyVouchersIsland}
      hydrateOn={hydrateOn}
      title={title}
      subTitle={subTitle}
      heroBackgroundImage={heroBackgroundImage}
      voucher1Label={voucher1Label}
      voucher1Price={voucher1Price}
      voucher1Range={voucher1Range}
      voucher1Value={voucher1Value}
      voucher1Delivery={voucher1Delivery}
      voucher1Image={voucher1Image}
      voucher2Label={voucher2Label}
      voucher2Price={voucher2Price}
      voucher2Range={voucher2Range}
      voucher2Value={voucher2Value}
      voucher2Delivery={voucher2Delivery}
      voucher2Image={voucher2Image}
      securityBadge1={securityBadge1}
      securityBadge2={securityBadge2}
    />
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="title" label="Title" defaultValue="Digital Gift Vouchers" />
    <TextField
      name="subTitle"
      label="Subtitle"
      defaultValue="Send perfect gifts instantly to your loved ones."
    />
    <ImageField
      name="heroBackgroundImage"
      label="Hero Background Image"
      defaultValue="/default-hero-bg.jpg"
    />

    <TextField name="voucher1Label" label="Voucher 1 Label" defaultValue="Shoprite Vouchers" />
    <TextField name="voucher1Price" label="Voucher 1 Price" defaultValue="From R10" />
    <TextField name="voucher1Range" label="Voucher 1 Range" defaultValue="R10 - R1000" />
    <TextField name="voucher1Value" label="Voucher 1 Value" defaultValue="shoprite" />
    <TextField
      name="voucher1Delivery"
      label="Voucher 1 Delivery"
      defaultValue="Instant delivery"
    />
    <ImageField
      name="voucher1Image"
      label="Voucher 1 Image"
      defaultValue="/default-voucher1.jpg"
    />

    <TextField
      name="voucher2Label"
      label="Voucher 2 Label"
      defaultValue="Shoprite Group Virtual Grocery Vouchers"
    />
    <TextField name="voucher2Price" label="Voucher 2 Price" defaultValue="From R50.00" />
    <TextField name="voucher2Range" label="Voucher 2 Range" defaultValue="R50 - R1000" />
    <TextField
      name="voucher2Value"
      label="Voucher 2 Value"
      defaultValue="shoprite-group"
    />
    <TextField
      name="voucher2Delivery"
      label="Voucher 2 Delivery"
      defaultValue="Instant delivery"
    />
    <ImageField
      name="voucher2Image"
      label="Voucher 2 Image"
      defaultValue="/default-voucher2.jpg"
    />

    <ImageField
      name="securityBadge1"
      label="Security Badge 1"
      defaultValue="/secure-payment.png"
    />
    <ImageField
      name="securityBadge2"
      label="Security Badge 2"
      defaultValue="/ssl-certified.png"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Computicket Voucher Module',
};
