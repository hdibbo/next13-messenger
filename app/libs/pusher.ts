import PusherServer from 'pusher'
import PusherClient from 'pusher-js'
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({ 
  CLOUD_NAME=da9qbt5ef 
  API_KEY=163131828771531
  API_SECRET=Nuv_mF2WgQRrpsV2HCCZXVlD7jM
});

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: 'us2',
  useTLS: true,
});

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    channelAuthorization: {
      endpoint: '/api/pusher/auth',
      transport: 'ajax',
    },
    cluster: 'us2',
  }
);

export CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
