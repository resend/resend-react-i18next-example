import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { getT } from '@/lib/i18n/get-t';
import { Locale } from '@/lib/i18n/i18n';

interface PricingProps {
  locale: Locale;
}

export async function Pricing({ locale }: PricingProps) {
  const { t } = await getT('email', locale);

  return (
    <Tailwind>
      <Html>
        <Head />
        <Body>
          <Preview>
            {t('email.preview')}
          </Preview>
          <Container className="bg-white rounded-[12px] mx-auto max-w-[500px] p-[24px]">
            <Section className="bg-white border border-solid border-gray-300 rounded-[12px] text-gray-600 p-[28px] w-full text-left mb-0">
              <Text className="text-indigo-600 text-[12px] leading-[20px] font-semibold tracking-wide mb-[16px] mt-[16px] uppercase">
                {t('email.exclusive-offer')}
              </Text>
              <Text className="text-[30px] font-bold leading-[36px] mb-[12px] mt-0">
                <span className="text-[rgb(16,24,40)]">$12</span>{' '}
                <span className="text-[16px] font-medium leading-[20px]">
                  {t('email.per-month')}
                </span>
              </Text>
              <Text className="text-gray-700 text-[14px] leading-[20px] mt-[16px] mb-[24px]">
                {t('email.copy')}
              </Text>
              <ul className="text-gray-500 text-[14px] leading-[24px] mb-[32px] pl-[14px]">
                {new Array(5).keys().map((index) => (
                  <li key={index} className="mb-[12px]">
                    {t(`email.feature-${index}`)}
                  </li>
                ))}
              </ul>
              <Button
                href="#"
                className="bg-indigo-600 rounded-[8px] box-border text-white inline-block text-[16px] leading-[24px] font-bold tracking-wide mb-[24px] max-w-full p-[14px] text-center w-full"
              >
                {t('email.call-to-action')}
              </Button>
              <Hr />
              <Text className="text-gray-500 text-[12px] leading-[16px] italic mt-[24px] mb-[6px] text-center">
                {t('email.urgency-note')}
              </Text>
              <Text className="text-gray-500 text-[12px] m-0 leading-[16px] text-center">
                {t('email.free-notice')}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

export default Pricing;

Pricing.PreviewProps = {
  locale: 'pt',
} satisfies PricingProps;
