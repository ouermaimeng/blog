import { useState, useEffect } from "react";
import { Response } from "@/interfaces/response"

export const useRequest = <T>(req: () => T, dependencies: Array<any> = [], defaultValue: any = []) => {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const request = async () => {
    setLoading(true)
    try {
      const res = await req()
      setData(res.content)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    request()
  }, dependencies)
  return {
    data,
    loading,
    request,
  }
}