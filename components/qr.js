import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Share } from 'react-native';

const QR = () => {
    // Thay đổi địa chỉ IP và cổng theo cấu hình của bạn
    const internalLink = "http://192.168.1.4:8081"

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            {shareQRCode}
            <Text>Mã QR cho mạng nội bộ:</Text>
            <QRCode
                value={internalLink}
                size={200}
            />
        </View>
    );
};

export default QR;



const shareQRCode = async () => {
    try {
        await Share.share({
            message: `Đây là mã QR cho mạng nội bộ: ${internalLink}`,
        });
    } catch (error) {
        alert(error.message);
    }
};
