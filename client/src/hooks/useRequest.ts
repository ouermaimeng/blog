import { useState, useEffect } from "react";
import { Response } from "@/interfaces/response"

export const useRequest = <T>(req: () => Promise<Response<any>>, dependencies: Array<any> = [], defaultValue: any = []) => {
  const [data, setData] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(false);
  const request = async () => {
    setLoading(true)
    try {
      const res = await req()
      if (res.status === 'OK') {
        setData(res.content)
      }
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    request()
  }, dependencies)

  if (loading) throw Promise.resolve(null)
  else {
    return {
      data,
      loading,
      request,
    }
  }
}