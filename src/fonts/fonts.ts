import localFont from 'next/font/local'

export const gilroy = localFont({
	variable: '--font',
  src: [
    {
      path: './SVN-Gilroy/Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SVN-Gilroy/Italic.otf',
      weight: '400',
      style: 'italic',
    },
		{
      path: './SVN-Gilroy/Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './SVN-Gilroy/Medium_Italic.otf',
      weight: '500',
      style: 'italic',
    },
		{
      path: './SVN-Gilroy/Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './SVN-Gilroy/Bold_Italic.otf',
      weight: '600',
      style: 'italic',
    },
		{
      path: './SVN-Gilroy/XBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SVN-Gilroy/XBold_Italic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
})