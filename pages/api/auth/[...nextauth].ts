import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        id: { label: 'id:', type: 'text', placeholder: 'id' },
        password: {
          label: 'password:',
          type: 'text',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = {
          id: 'hjhj',
          phoneNum: '01012345678',
          kakaoId: 'hj2525',
          password: 'hj2525',
        };

        if (
          credentials?.id === user.id &&
          credentials?.password === user.password
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          return null;
        }
      },
    }),
    // KakaoProvider({
    //   clientId: process.env.KAKAO_CLIENT_ID,
    //   clientSecret: process.env.KAKAO_CLIENT_SECRET,
    // }),
  ],
  pages: {
    signIn: '/auth/signIn',
  },
};
export default NextAuth(authOptions);
