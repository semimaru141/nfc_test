import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useTimer } from "./hooks/timer";

export const Timer = ({
  startDatetime
}: { startDatetime: Date | undefined}) => {
  const diff = useTimer(startDatetime);
  return (
    <Text style={{fontSize: 100}}>
      { diff }
    </Text>
  );
}
