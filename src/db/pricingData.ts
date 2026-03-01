export type PriceDataType ={
    id:number | string,
    plan: string,
    price: string,
    frequency: string,
    description: string,
    features: string[],
    buttonText: string,
    buttonLink: string,
    delay: string,
    isActive: boolean
}
export const pricingData:PriceDataType[] = [
    {
        id: 'monthly-basic',
        plan: 'Basic Service',
        price: 'AED 100',
        frequency: 'Starting from',
        description: 'Perfect for small residential glass and mirror projects with standard installation services',
        features: [
            'Basic glass installation',
            'Standard mirror mounting',
            'Free site consultation',
            'Professional installation',
            '1 year warranty on workmanship'
        ],
        buttonText: 'Get Quote',
        buttonLink: '/contact',
        delay: '.3',
        isActive: false
    },
    {
        id: 'monthly-popular',
        plan: 'Most Popular',
        price: 'AED 300',
        frequency: 'Starting from',
        description: 'Comprehensive glass and mirror solutions for residential and small commercial projects',
        features: [
            'Custom glass fabrication',
            'Premium mirror installation',
            'Free design consultation',
            'Expert installation team',
            '2 years warranty coverage',
        ],
        buttonText: 'Get Quote',
        buttonLink: '/contact',
        delay: '.5',
        isActive: true
    },
    {
        id: 'monthly-premium',
        plan: 'Premium Service',
        price: 'Custom',
        frequency: 'Quote based',
        description: 'Complete glass and mirror solutions for large commercial and luxury residential projects',
        features: [
            'Full project management',
            'Custom design & fabrication',
            'Premium materials & finishes',
            '24/7 maintenance support',
            'Priority service'
        ],
        buttonText: 'Contact Us',
        buttonLink: '/contact',
        delay: '.7',
        isActive: false
    }
];