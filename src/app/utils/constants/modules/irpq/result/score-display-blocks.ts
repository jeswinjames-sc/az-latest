export const SCORE_DISPLAY_BLOCKS = [
    {
        columns: [
            {
                title: 'Risk Averse',
                content: `<p>You are most interested in protecting the value of your investment and you are satisfied with earnings from ordinary bank deposit products. Your investment horizon is short to moderate and you do not have tolerance for risk and volatility. You seek capital preservation.</p>
             <p>Total score: 11 or below</p>
             <p>Recommended allocation on equity investments: None</p>`,
                size: 6,
                isActive: false,
                key: 'risk-averse'
            },
            {
                title: 'Conservative',
                content: `<p>You are comfortable having your assets managed conservatively with an emphasis on the stability that comes from fixed income investments, while generating capital appreciation overtime. Your investment horizon is short to moderate and your tolerance towards risk and volatility is moderate. You seek capital preservation while achieving some growth on your investment.</p>
            <p>Total score: 12 to 19</p>
            <p>Recommended allocation on equity investments: Up to 20%</p>`,
                size: 6,
                isActive: false,
                key: 'conservative'
            },
        ]
    },
    {
        columns: [
            {
                title: 'Moderate',
                content: `<p>You are seeking long term capital appreciation and to a lesser extent, the stability that comes from fixed-income investments. You are most comfortable with relatively stable year-to-year returns but will accept some volatility as you understand that the capital growth you require cannot be achieved without some element of risk.</p>
            <p>Total score: 20 to 28</p>
            <p>Recommended allocation on equity investments: Between 20% to 50%</p>`,
                size: 6,
                isActive: false,
                key: 'moderate'
            },
            {
                title: 'Growth - Oriented',
                content: `<p>You are seeking long term capital appreciation with little or no requirement from additional income. You can tolerate greater year to year volatility, as well as some moderate to strong fluctuations in the capital value of your investment. You realize that overtime, equity markets usually outperforms other investments.</p>
            <p>Total score: 29 or more</p>
            <p>Recommended allocation on equity investments: At least 50%</p>`,
                size: 6,
                isActive: false,
                key: 'growth'
            },
        ]
    }
]